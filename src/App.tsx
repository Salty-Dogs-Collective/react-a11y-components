import { Button } from './components/atoms/Button';
import viteLogo from '/vite.svg';

export const App = () => {
  return (
    <>
      <div className="flex justify-center mb-5">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} alt="Vite logo" width="80" height="80" />
        </a>
      </div>
      <h1 className="text-3xl font-bold mb-10">Components</h1>
      <div className="flex flex-col space-y-5">
        <Button>Button Text</Button>
      </div>
    </>
  );
};
