type WeatherBlockProps = {
  location: string;
  temperature: number;
};

const WeatherBlock = ({ location, temperature }: WeatherBlockProps) => {
  return (
    <div className="text-lg font-semibold">
      The weather in {location} is {temperature}°F.
    </div>
  );
};

export default WeatherBlock;
