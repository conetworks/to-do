<template>
  <div class="container">
    <div class="row align-items-center min-vh-100">
      <div
        class="col-12 col-sm-8 col-md-6 col-lg-4 offset-0 offset-sm-2 offset-md-3 offset-lg-4"
      >
        <form @submit="loginWithEmailAndPassword">
          <div class="mb-3 text-center">
            <img
              src="../images/logo.png"
              alt="logo"
              style="height: 6rem"
              class="bg-secondary"
            />
            <h1>Login!</h1>
          </div>
          <hr />
          <div
            class="mb-3 border bg-warning border-warning rounded p-2"
            style="--bs-bg-opacity: 0.2"
            v-if="!!this.message"
          >
            {{ this.message }}
          </div>
          <div class="mb-3">
            <label class="form-label" for="email">Email único</label>
            <input
              class="form-control"
              type="email"
              name="email"
              id="email"
              v-model="this.email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div class="mb-4">
            <label class="form-label" for="password">Password/Contraseña</label>
            <div class="input-group mb-3">
              <input
                :type="this.isPasswordVisible ? 'text' : 'password'"
                class="form-control"
                name="password"
                placeholder="Your secure password"
                v-model="this.password"
                required
              />
              <div class="input-group-text">
                <input
                  class="form-check-input mt-0 me-2"
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  v-model="this.isPasswordVisible"
                />Mostrar contraseña
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button class="btn btn-primary">Login!</button>
            <span class="ms-3 text-end"
              >Not registered yet?
              <router-link to="/sign-up">Sign Up</router-link></span
            >
          </div>
        </form>
        <div class="text-center my-3">
          <h4 class="mb-3">or</h4>
          <button
            class="btn btn-lg btn-outline-primary"
            @click="this.$store.dispatch('signInWithGoogle')"
          >
            <div class="d-flex justify-content-center align-items-center gap-2">
              <span class="align-self-baseline"> Sign In with Google </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInView",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      isPasswordVisible: false,
    };
  },
  methods: {
    async loginWithEmailAndPassword(event) {
      event.preventDefault();

      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("signInWithEmailAndPassword", formData);
      } catch (error) {
        this.message = error.message;
      }
    },
  },
};
</script>
