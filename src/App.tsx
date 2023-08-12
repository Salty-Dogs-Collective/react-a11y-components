import { Button } from './components/atoms/Button/Button.tsx';
import viteLogo from '/vite.svg';

export const App = () => {
  return (
    <>
      <div className="mb-5 flex justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} alt="Vite logo" width="80" height="80" />
        </a>
      </div>
      <h1 className="mb-10 text-3xl font-bold">Components</h1>
      <div className="flex flex-col space-y-5">
        <Button>Button Text</Button>
      </div>
    </>
  );
};
