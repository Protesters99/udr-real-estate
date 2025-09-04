import clsx from "clsx";

export default function Button({ text, arrowDisplay, amber }) {
  return (
    <button
      className={clsx(
        `border text-lg font-bold py-4 px-6 rounded-2xl`,
        amber && "text-amber-700 border-amber-700"
      )}
      //   className={`border text-lg font-bold py-4 px-6 rounded-2xl ${
      //     amber ? "text-amber-700 border-amber-700" : ""
      //   }`}
    >
      {text}
      {arrowDisplay && <span>&rarr;</span>}
    </button>
  );
}
