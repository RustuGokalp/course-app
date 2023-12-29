const Course = ({ id, content, title, price, removeOneCourse }) => {
  return (
    <div>
      <div className="cardTopWrapper">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price}$</h4>
      </div>
      <button className="deleteCardBtn" onClick={() => removeOneCourse(id)}>
        Sil
      </button>
    </div>
  );
};

export default Course;
