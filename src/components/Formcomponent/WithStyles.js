export const WithStyles = ({ image, headline, description }) => {
    return (
      <div className="border p-4">
        <img src={image} alt={headline} className="mb-2" />
        <h2 className="text-lg font-bold">{headline}</h2>
        <p className="text-sm">{description}</p>
      </div>
    );
  };
  
 