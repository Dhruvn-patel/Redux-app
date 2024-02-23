import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Loading from "../common/Loading";
import React, { Suspense } from "react";

export const RouteComponent = () => {
  return (
    <Routes>
      {routes &&
        routes.map((data, idx) => {
          return (
            data.component && (
              <Route
                key={idx}
                path={data.path}
                element={
                  <Suspense fallback={<Loading />}>{data.component}</Suspense>
                }
              />
            )
          );
        })}
    </Routes>
  );
};
