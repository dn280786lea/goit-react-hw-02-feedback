import Feedback from './Feedback/feedback';

export const App = () => {
  return (
    <div>
      <section className="feedback">
        <Feedback feedback={Feedback} />
      </section>
    </div>
  );
};

export default App;
