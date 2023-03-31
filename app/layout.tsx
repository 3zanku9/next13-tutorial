import "@/styles/globals.css";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <html>
      <body>
        <div>layout</div>
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
