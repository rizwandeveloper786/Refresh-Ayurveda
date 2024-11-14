// components/CardSection.tsx

type Card = {
    title: string;
    content: string;
  };
  
  const cards: Card[] = [
    { title: 'Card 1', content: 'This is the first card' },
    { title: 'Card 2', content: 'This is the second card' },
    { title: 'Card 3', content: 'This is the third card' },
  ];
  
  const CardSection: React.FC = () => {
    return (
      <section style={{ display: 'flex', gap: '1rem', padding: '2rem' }}>
        {cards.map((card, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '1rem', flex: 1 }}>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default CardSection;
  