interface Props {
  imageSource: string;
  linkSource: () => void;
  imageAlt: string;
  hiddenOption?: string;
  title: string;
  link: string;
}

function WorkPreview({
  imageSource,
  linkSource,
  imageAlt,
  hiddenOption,
  title,
  link,
}: Props) {
  return (
    <>
      <div className={"col " + hiddenOption}>
        <div className="card">
          <a onClick={linkSource} href={link} target="_blank">
            <img src={imageSource} className="card-img" alt={imageAlt} />
          </a>
          <div className="card-header">
            <h5 className="card-title fs-6 m-0 p-0">{title}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkPreview;
