const CheckBox = ({ content }) => {
  return (
    <div>
      <div className="flex items-center border-1 border-[#E1E3ED] rounded-2xl mb-[10px]">
        <input
          type="checkbox"
          className="w-[25px] h-[25px] mx-[20px] accent-prograpy"
        />
        <div className="text-[20px] text-[#E1E3ED] font-medium my-[20px]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
