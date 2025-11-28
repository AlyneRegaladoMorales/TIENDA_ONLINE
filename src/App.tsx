import FormLogin from "./components/formLogin";

const App = () => {
  return (
    <main className="flex h-screen items-center justify-center bg-[url('src/assets/netflix-bg.png')]">
      <div className="flex-col items-center bg-black/70 p-15 w-[25vw] rounded-2xl">
        <FormLogin />
      </div>

    </main>
  );
};

export default App;
