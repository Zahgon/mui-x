export default function asyncWorker({
  work,
  tasks,
  done,
}: {
  work: () => void;
  tasks: { current: number };
  done: () => void;
}) {
  const myNonEssentialWork: IdleRequestCallback = (deadline) => {
      throw new Error("STUB");
  };

  // Don't use requestIdleCallback if the time is mock, better to run synchronously in such case.
  if (typeof requestIdleCallback === 'function' && !(requestIdleCallback as any).clock) {
    requestIdleCallback(myNonEssentialWork);
  } else {
    while (tasks.current > 0) {
      work();
    }
    done();
  }
}
