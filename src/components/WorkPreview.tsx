interface Props {
  imageSource: string;
  linkSource: () => void;
  imageAlt: string;
  hiddenOption?: string;
}

function WorkPreview({
  imageSource,
  linkSource,
  imageAlt,
  hiddenOption,
}: Props) {
  return (
    <>
      <div className={"col " + hiddenOption}>
        <div className="card">
          <a onClick={linkSource} className="">
            <img src={imageSource} className="card-img-top" alt={imageAlt} />
          </a>
        </div>
      </div>
    </>
  );
}

export default WorkPreview;
