<script>
</script>

<footer>
  <p
    aria-hidden="true"
    class="btt"
    on:click={() => {
      window.scrollTo(0, 0);
    }}
  >
    &uarr; Scroll to top
  </p>
  <div class="flex-container">
    <div class="left">
      <!-- <h2 class="thanks">Thanks for visiting the personal site of</h2> -->
      <h1 class="name">Thanks for visiting <span class="wave">👋</span></h1>
      <h2 class="copyright">
        © Mr. Freeze / 2022 / All rights reserved
      </h2>
    </div>
    <div class="right">
      <div class="column">
        <h5 class="column-header">Connect</h5>
        <div class="column-content">
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/connor-rothschild/">LinkedIn</a
          >
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/connorrothschild/">GitHub</a
          >
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/intent/follow?screen_name=CL_Rothschild"
            >Twitter</a
          >
        </div>
      </div>
      <div class="column">
        <h5 class="column-header">Contact</h5>
        <div class="column-content">
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:connor@connorrothschild.com">Personal</a
          >
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:connor@mokshadata.com">Work</a
          >
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendly.com/connorrothschild/meeting">Meet</a
          >
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    display: flex;
    place-items: center;
    height: 300px;
    padding: 3rem 1rem;
    background: var(--footer-bg);
    color: var(--pure-text-color);
    position: relative;
    z-index: 99;
    box-shadow: -1px -1px 6px var(--box-shadow-color);
  }

  .btt {
    position: absolute;
    bottom: 0;
    right: 0;
    left: unset;
    font-size: 1rem;
    padding: 1rem;
    cursor: pointer;
  }

  .flex-container {
    max-width: 1268px;
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    place-items: center;
  }

  footer h1,
  footer h2 {
    color: var(--pure-text-color);
  }

  .right {
    display: flex;
    justify-content: space-evenly;
  }

  .left,
  .right {
    flex: 1;
  }

  .left {
    text-align: left;
  }

  .name {
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 1rem;
    letter-spacing: 0.025rem;
  }

  .copyright {
    font-size: 0.85rem;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--pure-text-color);
    font-family: var(--font-sans);
  }

  .column-header {
    text-align: center;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 1rem;
    color: var(--accent-color);
  }

  .column-content {
    display: flex;
    flex-direction: column;
  }

  .link {
    color: var(--pure-text-color);
    font-family: var(--font-sans);
    margin-bottom: 0.15rem;
    padding-bottom: 0.15rem;
    font-weight: 200;
    font-size: 1rem;
    letter-spacing: 0.01rem;
    width: min-content;
  }

  .wave:hover {
    display: inline-block;
    animation: wiggle 700ms linear forwards;
  }

  @keyframes wiggle {
    0% {
      transform: rotate(0);
    }
    20% {
      transform: rotate(7.5deg);
    }
    40% {
      transform: rotate(-7.5deg);
    }
    60% {
      transform: rotate(7.5deg);
    }
    80% {
      transform: rotate(-7.5deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  @media screen and (max-width: 768px) {
    .flex-container {
      flex-direction: column;
    }
    .left {
      width: 100%;
    }
    .right {
      width: 80%;
      margin-left: auto;
      justify-content: flex-end;
    }
    .right .column:first-of-type {
      margin-right: 10%;
    }
    .name {
      font-size: 2.5rem;
    }
    .link {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 400px) {
    footer {
      height: 330px;
    }

    .right {
      width: 100%;
      justify-content: space-between;
    }

    .right .column:last-of-type .column-content {
      align-items: flex-end;
    }

    .name {
      font-size: 2rem;
    }

    .copyright {
      font-size: 0.65rem;
    }
  }
</style>
