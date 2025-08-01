export function Header({ isDark, setIsDark }) {
  return (
    <div
      className={`${
        isDark
          ? "bg-(--Dark-Mode-Elements) shadow-lg"
          : "bg-(--Light-Mode-Background) shadow-sm"
      } flex justify-between px-16 py-8`}
    >
      <h1
        className={`${
          isDark
            ? "text-(--Dark-Mode-Text-Light-Mode)"
            : "text-(--Light-Mode-Text)"
        } font-bold text-xl`}
      >
        Where in the world?
      </h1>
      <button onClick={() => setIsDark(!isDark)} className="flex">
        <svg
          enableBackground="new 0 0 512 512"
          height="25px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="25px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M349.852,343.15c-49.875,49.916-131.083,49.916-181,0c-49.916-49.918-49.916-131.125,0-181.021  c13.209-13.187,29.312-23.25,47.832-29.812c5.834-2.042,12.293-0.562,16.625,3.792c4.376,4.375,5.855,10.833,3.793,16.625  c-12.542,35.375-4,73.666,22.25,99.917c26.209,26.228,64.5,34.75,99.916,22.25c5.792-2.062,12.271-0.582,16.625,3.793  c4.376,4.332,5.834,10.812,3.771,16.625C373.143,313.838,363.06,329.941,349.852,343.15z M191.477,184.754  c-37.438,37.438-37.438,98.354,0,135.771c40,40.021,108.125,36.416,143-8.168c-35.959,2.25-71.375-10.729-97.75-37.084  c-26.375-26.354-39.333-61.771-37.084-97.729C196.769,179.796,194.039,182.192,191.477,184.754z"
            className={`${
              isDark
                ? "fill-(--Dark-Mode-Text-Light-Mode)"
                : "fill-(--Light-Mode-Text)"
            }`}
          />
        </svg>
        <p
          className={`${
            isDark
              ? "text-(--Dark-Mode-Text-Light-Mode)"
              : "text-(--Light-Mode-Text)"
          } semi-bold`}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </p>
      </button>
    </div>
  );
}
