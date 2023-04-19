import _nouns from '../data/germanNouns.json';

type Noun = {
  article: string;
  singular: string;
  plural: string;
};

type Props = {
  article: string;
}

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const GermanNouns = ({ article }: Props) => {
  const nouns = shuffle(_nouns).filter((m) => m.article === article);
  // const nouns = shuffle(_nouns);

  return (
    <>
      <h2>German Nouns</h2>
      <p>There are {nouns.length} German Nouns ({article}).</p>
      <div className="nouns">
        {nouns.map((noun: Noun) => {
          return (
            <div className="noun">
              <div className="singular">
                {noun.article} {noun.singular}
              </div>
              <div className="plural">{noun.plural}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GermanNouns;
