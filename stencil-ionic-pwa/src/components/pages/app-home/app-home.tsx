import { Component } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return [
      <app-header is-home />,

      <ion-content padding>
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on{" "}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started. OK?
        </p>

        <ion-button href="/profile/floc" expand="block">
          Profile page
        </ion-button>

        <a href="/recipes">Recipes</a>
      </ion-content>
    ];
  }
}
