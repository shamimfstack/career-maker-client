import PropTypes from "prop-types"

const BannerTemplate = ({image, title}) => {
    // const style = {
    //     backgroundImage: {image}
    // }
  return (
    <div className="h-screen" style={{backgroundImage: image}}>
        <h2>Hello</h2>
        {/* <img src="" alt="" /> */}
        <button>{title}</button>
    </div>
  );
}

BannerTemplate.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string
}

export default BannerTemplate;
