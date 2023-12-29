const Course = ({ id, content, title, price, currency, removeOneCourse }) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5 mx-10">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{content}</p>
          <div className="card-actions flex justify-between items-center">
            <div className="text-2xl">
              {price == "0" ? "FREE" : `${price}${currency}`}
            </div>
            <button
              className="btn btn-primary w-32"
              onClick={() => removeOneCourse(id)}
            >
              SİL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
