import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SizeGuide({ openSizeGuide, handleCloseSizeGuide }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openSizeGuide}
      onClose={handleCloseSizeGuide}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openSizeGuide}>
        <div className="size-guide">
          <div className="size-guide_header">
            <h3>size guide</h3>
            <FontAwesomeIcon
              className="bag_close"
              icon={faXmark}
              onClick={handleCloseSizeGuide}
            />
          </div>
          <div className="size-guide_content">
            <div className="size-guide_img">
              <img src="../images/size-guide.webp" alt="size-guide" />
            </div>
            <div className="size-guide_info">
              <div className="size-guide_table">
                <h5>jeans</h5>
                <table>
                  <thead>
                    <tr>
                      <th>size</th>
                      <th>xs</th>
                      <th>s</th>
                      <th>m</th>
                      <th>l</th>
                      <th>xl</th>
                      <th>xxl</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>bust</td>
                      <td>84</td>
                      <td>84</td>
                      <td>84</td>
                      <td>84</td>
                      <td>84</td>
                      <td>84</td>
                    </tr>
                    <tr>
                      <td>waist</td>
                      <td>75</td>
                      <td>75</td>
                      <td>75</td>
                      <td>75</td>
                      <td>75</td>
                      <td>75</td>
                    </tr>{" "}
                    <tr>
                      <td>hips</td>
                      <td>69</td>
                      <td>69</td>
                      <td>69</td>
                      <td>69</td>
                      <td>69</td>
                      <td>69</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="size-guide_table">
                <h5>footwear</h5>
                <table>
                  <thead>
                    <tr>
                      <th>size</th>
                      <th>xs</th>
                      <th>s</th>
                      <th>m</th>
                      <th>l</th>
                      <th>xl</th>
                      <th>xxl</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>bust</td>
                      <td>84</td>
                      <td>84</td>
                      <td>84</td>
                      <td>84</td>
                      <td>84</td>
                      <td>84</td>
                    </tr>
                    <tr>
                      <td>waist</td>
                      <td>75</td>
                      <td>75</td>
                      <td>75</td>
                      <td>75</td>
                      <td>75</td>
                      <td>75</td>
                    </tr>{" "}
                    <tr>
                      <td>hips</td>
                      <td>69</td>
                      <td>69</td>
                      <td>69</td>
                      <td>69</td>
                      <td>69</td>
                      <td>69</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
