<template>
  <div class="prose flex flex-col justify-center items-center">
    <div class="flex flex-row justify-center">
      <img
        src="https://user-images.githubusercontent.com/29407019/112369852-bd89e200-8ced-11eb-8c85-172ce6783191.png"
        alt="Bite Vite Template Logo"
        width="200"
      />
      <img
        src="https://user-images.githubusercontent.com/29407019/112369775-a2b76d80-8ced-11eb-82fd-c5b8cf3bfbb6.png"
        alt="Bite Vite Template Logo"
        width="200"
      />
    </div>
    <p>
      Vite template that minimizes <b><code>bite</code></b> pain.
    </p>
    <br />
    <h2>Ready for most used deployment platforms 🥞</h2>
    <p>Also, ready for production environment. With several clicks.</p>
    <table>
      <thead>
        <tr>
          <th style="text-align: center"><strong>Kind</strong></th>
          <th style="text-align: center"><strong>Netlify</strong></th>
          <th style="text-align: center"><strong>Vercel</strong></th>
          <th style="text-align: center"><strong>Heroku</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: center">
            <strong><code>Buttons</code></strong>
          </td>
          <td style="text-align: center">
            <a
              href="https://app.netlify.com/start/deploy?repository=https://github.com/Asim-Tahir/bite"
              ><img
                src="https://www.netlify.com/img/deploy/button.svg"
                alt="Deploy with Netlify"
            /></a>
          </td>
          <td style="text-align: center">
            <a
              href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FAsim-Tahir%2Fbite&amp;project-name=bite-vite&amp;repo-name=bite-vite&amp;demo-title=Bite%20Vite%20Template&amp;demo-description=Vite%20template%20that%20minimizes%20bite%20pain%20%F0%9F%90%9D"
              ><img src="https://vercel.com/button" alt="Deploy with Vercel"
            /></a>
          </td>
          <td style="text-align: center">
            <a
              href="https://heroku.com/deploy?template=https://github.com/Asim-Tahir/bite"
              ><img
                src="https://www.herokucdn.com/deploy/button.svg"
                alt="Deploy with Heroku"
            /></a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center">
            <strong><code>Live Websites</code></strong>
          </td>
          <td style="text-align: center">
            <a href="https://bite-vite.netlify.app/">bite-netlify</a>
          </td>
          <td style="text-align: center">
            <a href="https://bite-vite.vercel.app/">bite-vercel</a>
          </td>
          <td style="text-align: center">
            <a href="https://bite-vite.herokuapp.com/">bite-heroku</a>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Comes with delicious features 🍯</h2>
    <table>
      <thead>
        <tr>
          <th style="text-align: center">Feature</th>
          <th style="text-align: left">Label</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: center"><code>StorybookJS</code> for Vue 3</td>
          <td style="text-align: left">
            <a
              href="https://github.com/storybookjs/storybook/releases/tag/v6.2.0-rc.6"
              ><img
                src="https://img.shields.io/npm/v/storybook/next?label=%40storybook%2Fvue&amp;logo=storybook"
                alt="StorybookJS"
            /></a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center"><code>PostCSS</code></td>
          <td style="text-align: left">
            <a href="https://github.com/postcss/postcss/releases/latest"
              ><img
                src="https://img.shields.io/npm/v/postcss/latest?label=postcss&amp;logo=postcss&amp;logoColor=%23DD3A0A"
                alt="postcss"
            /></a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center"><code>TailwindCSS 🌊</code></td>
          <td style="text-align: left">
            <a
              href="https://github.com/tailwindlabs/tailwindcss/releases/latest"
              ><img
                src="https://img.shields.io/npm/v/tailwindcss/latest?label=tailwindcss&amp;logo=tailwind-css"
                alt="TailwindCSS"
            /></a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center">
            <code>SVG loader</code> for Vite ⚡
          </td>
          <td style="text-align: left">
            <a
              href="https://github.com/jpkleemans/vite-svg-loader/releases/latest"
              ><img
                src="https://img.shields.io/npm/v/vite-svg-loader/latest?label=vite-svg-loader&amp;logo=svg"
                alt="vite-svg-loader"
            /></a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center">
            Powered by <code>Typescript</code> 🦾
          </td>
          <td style="text-align: left">
            <a href="https://github.com/microsoft/TypeScript/releases/latest"
              ><img
                src="https://img.shields.io/npm/v/typescript/latest?label=typescript&amp;logo=typescript"
                alt="Typescript"
            /></a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center">Ready for <code>PWA</code> 🧳</td>
          <td style="text-align: left">
            <a href="https://github.com/antfu/vite-plugin-pwa/releases/latest"
              ><img
                src="https://img.shields.io/npm/v/vite-plugin-pwa/latest?label=vite-plugin-pwa"
                alt="vite-plugin-pwa"
            /></a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center">
            Built-in <a href="Dockerfile"><code>docker</code></a> 🐳 and
            <a href="docker-compose.yml"><code>docker-compose</code></a> 🐋
            support
          </td>
          <td style="text-align: left">
            <a href="Dockerfile"
              ><img
                src="https://img.shields.io/static/v1?label=%20&amp;message=Docker&amp;logo=docker&amp;color=249"
                alt="Docker"
            /></a>
            <a href="docker-compose.yml"
              ><img
                src="https://img.shields.io/static/v1?label=%20&amp;message=Docker-Compose&amp;logo=docker&amp;color=249"
                alt="Docker-Compose"
            /></a>
          </td>
        </tr>
        <tr>
          <td style="text-align: center">
            Predefined GraphQL backend config into
            <a href="vite.config.ts#L23"><code>vite.config.ts</code></a>
          </td>
          <td style="text-align: left">
            <img
              src="https://img.shields.io/static/v1?label=%20&amp;message=GraphQL&amp;logo=graphql&amp;color=DC32A4"
              alt="GraphQL"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Getting Started 🍽️</h2>
    <p>Let’s start with preparing the dinner table 😋.</p>
    <p>
      <a href="https://github.com/Asim-Tahir/bite/generate"
        ><code>Click here for generate repo from this template.</code></a
      >
      Or you can click <code>Use this template</code> button above.
    </p>
  </div>
</template>

<style lang="postcss" scoped></style>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "About",
  });
</script>
