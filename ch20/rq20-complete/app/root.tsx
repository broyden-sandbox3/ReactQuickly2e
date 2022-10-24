import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Body from "./components/body";
import Main from "./components/main";
import { getUser } from "./session.server";
import Provider from "./styles/theme";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <Provider>
        <Body>
          <Main>
            <Outlet />
          </Main>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Body>
      </Provider>
    </html>
  );
}
