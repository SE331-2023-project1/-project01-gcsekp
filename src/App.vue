<template>
  <div class="main-container">
    <header class="fixed-header">
      <div class="wrapper">
        <nav class="font-mono text-yellow-300" id="menu">
          <RouterLink to="/">Student</RouterLink> |
          <RouterLink to="/teacher">Teacher</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.main-container {
  background: transparent;
  display: flex;
  flex-direction: column;
  width: 100vh; /* Full width */
}

header {
  z-index: 100;
  padding: 10px 0;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  font-size: 20px;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color: var(--color-text);
}

nav a:hover {
  background-color: transparent;
}

@media (min-width: 1246px) {
  .fixed-header {
    padding: 10px 20px;
    justify-content: flex-start;
  }

  nav {
    font-size: 1rem;
    text-align: left;
  }
}
#menu {
  display: flex;
  align-items: center;
  font: bold;
}
</style>
