import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";

function PasswordGenerator() {
  const [isCopied, setIscopied] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIscopied(false), 1000);
    }
  }, [isCopied]);

  return (
    <div className="2xl:w-4/12 font-kanit lg:w-6/12 md:w-8/12 mx-auto w-11/12 my-2 p-2 relative text-shuttle-gray">
      <h1 className="font-bold font-oswald my-4 text-2xl text-center text-dodger-blue">
        Random Password Generator
      </h1>
      <label htmlFor="password-input">Password</label>
      <input
        aria-placeholder="Click the generate button to create password"
        className="bg-zircon block border border-shuttle-gray focus:outline-dodger-blue p-2 rounded w-full"
        id="password-input"
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Click the generate button to create password"
        type="text"
        value={password}
      />
      <div className="bg-zircon flex justify-between my-4 p-2 rounded w-full">
        <button
          className="basis-1/4 bg-dodger-blue p-2 rounded text-zircon"
          onClick={generatePassword}
          type="button"
        >
          Generate
        </button>
        <button
          className="basis-1/4 border border-shuttle-gray p-2 rounded"
          onClick={copyPassword}
          type="button"
        >
          Copy
        </button>
        {password && (
          <button
            className="basis-1/4 p-2 rounded"
            onClick={resetPassword}
            type="button"
          >
            Reset
          </button>
        )}
      </div>
      {isCopied && (
        <p className="absolute bottom-0 flex items-center justify-center left-1/4 right-1/4">
          Password copied
          <span className="ml-2">
            <FaRegCopy />
          </span>
        </p>
      )}
    </div>
  );

  function generatePassword(): void {
    const password = Math.random().toString(36).slice(2);
    setPassword(password);
  }

  function copyPassword(): void {
    const input = document.querySelector("#password-input") as HTMLInputElement;
    if (password.trim()) {
      input.select();
      input.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(input.value);
      setIscopied(true);
    }
  }

  function resetPassword(): void {
    setPassword("");
  }
}

export default PasswordGenerator;
