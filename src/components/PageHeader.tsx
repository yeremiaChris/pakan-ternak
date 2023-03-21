interface IPageHeader {
  title?: string;
  description?: string;
}
const PageHeader = ({ title, description }: IPageHeader) => {
  return (
    <div className="my-10 container">
      <h2 className="text-3xl mb-2 font-medium">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default PageHeader;
