import { Suspense } from "react";

const MemoizeComponent = React.memo(Component);

const MYLazyCompo = React.lazy(() => import("./context-api"));

<>
  <Suspense fallback={<div>loading</div>}>
    <MYLazyCompo />
  </Suspense>
</>;
