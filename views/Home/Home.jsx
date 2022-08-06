import * as styles from './home.module.css';
import ImageCityLife from '../../components/images/ImageCityLife';
import ImageLogistics from '../../components/images/ImageLogistics';
import ImageBlob from '../../components/images/ImageBlob';
import ImageUnderConstruction from '../../components/images/ImageUnderConstruction';

const Home = () => {
  const primaryColor = '#91d9af';
  const primaryColorDarker = '#94cdac';
//   const secondaryColor = '#dbb27d';
  const grayColor = '#dcf4e6';
  const grayColorDarker = '#a0c9b1';

  return (
    <div className={styles.container}>
      <div className={styles.blob1}>
        <ImageBlob color1={grayColor} color2={grayColorDarker} />
      </div>
      <div className={styles.blob2}>
        <ImageBlob color1={primaryColor} color2={primaryColorDarker} />
      </div>
      <div className={styles.text}>
        <h1>Page is under construction</h1>
        <p>Please come back later</p>
      </div>
      <div className={styles.picture}>
        <ImageCityLife color={primaryColor} />
        {/* <ImageUnderConstruction color={primaryColor}/> */}
        {/* <ImageLogistics color={primaryColor}/> */}
      </div>
    </div>
  );
};

export default Home;
