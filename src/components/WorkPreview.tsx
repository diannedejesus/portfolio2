interface Props {
  imageSource: string;
  linkSource: () => void;
  imageAlt: string;
}

function WorkPreview({ imageSource, linkSource, imageAlt }: Props) {
  return (
    <>
      <div className="col">
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
