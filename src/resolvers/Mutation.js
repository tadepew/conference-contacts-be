const mutationSuccess = (code, message, fields) => ({
  code,
  message,
  success: true,
  ...fields
});

const mutationError = error => ({
  code: '500',
  success: false,
  message: `Something went wrong; ${error}`
});

const Mutation = {
  async registerUser(parent, { data }, { prisma }, info) {
    try {
      const registerUser = await prisma.registerUser(data);
      return mutationSuccess(201, 'Welcome!', { registerUser });
    } catch (error) {
      return mutationError(error);
    }
  },
  async loginUser(parent, { data }, { prisma }, info) {
    try {
      const loginUser = await prisma.loginUser(data);
      return mutationSuccess(201, 'Welcome!', { loginUser });
    } catch (error) {
      return mutationError(error);
    }
  },
  async createUser(parent, { data }, { prisma }, info) {
    try {
      const user = await prisma.createUser(data);
      return mutationSuccess(201, 'Welcome!', { user });
    } catch (error) {
      return mutationError(error);
    }
  },
  async updateUser(parent, { id, data }, { prisma }, info) {
    try {
      const user = await prisma.updateUser({ data, where: { id } });
      return mutationSuccess(200, 'Update successful!', { user });
    } catch (error) {
      return mutationError(error);
    }
  },
  async deleteUser(parent, { id }, { prisma }, info) {
    try {
      const user = await prisma.deleteUser({ id });
      return mutationSuccess(204, 'User deleted successfully.', { user });
    } catch (error) {
      return mutationError(error);
    }
  },
  async createProfileField(parent, { data }, { prisma }, info) {
    try {
      const profileField = await prisma.createProfileField(data);
      return mutationSuccess(201, 'Profile fields created successfully!', {
        profileField
      });
    } catch (error) {
      return mutationError(error);
    }
  },
  async deleteProfileField(parent, { id }, { prisma }, info) {
    try {
      const profileField = await prisma.deleteProfileField({ id });
      return mutationSuccess(204, 'User deleted successfully.', {
        profileField
      });
    } catch (error) {
      return mutationError(error);
    }
  }
};

module.exports = Mutation;
