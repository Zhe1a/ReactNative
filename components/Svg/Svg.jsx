import Svg, { Circle, G, Path, Rect, Defs, ClipPath } from "react-native-svg";

export const Addregister = () => {
  return (
    <>
      <Svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="30" cy="30" r="30" fill="white" />
        <G clip-path="url(#clip0_32_29)">
          <Path
            d="M29.9998 33.2C31.7671 33.2 33.1998 31.7673 33.1998 30C33.1998 28.2327 31.7671 26.8 29.9998 26.8C28.2325 26.8 26.7998 28.2327 26.7998 30C26.7998 31.7673 28.2325 33.2 29.9998 33.2Z"
            fill="#BDBDBD"
          />
          <Path
            d="M27 20L25.17 22H22C20.9 22 20 22.9 20 24V36C20 37.1 20.9 38 22 38H38C39.1 38 40 37.1 40 36V24C40 22.9 39.1 22 38 22H34.83L33 20H27ZM30 35C27.24 35 25 32.76 25 30C25 27.24 27.24 25 30 25C32.76 25 35 27.24 35 30C35 32.76 32.76 35 30 35Z"
            fill="#BDBDBD"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_32_29">
            <Rect
              width="24"
              height="24"
              fill="white"
              transform="translate(18 18)"
            />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
export const GetRegister = () => {
  return (
    <>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clip-path="url(#clip0_36_45)">
          <Path
            d="M11.9998 15.2C13.7671 15.2 15.1998 13.7673 15.1998 12C15.1998 10.2327 13.7671 8.79999 11.9998 8.79999C10.2325 8.79999 8.7998 10.2327 8.7998 12C8.7998 13.7673 10.2325 15.2 11.9998 15.2Z"
            fill="white"
          />
          <Path
            d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
            fill="white"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_36_45">
            <Rect width="24" height="24" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};
export const AddComment = () => {
  return (
    <>
      <Svg
        width="12"
        height="16"
        viewBox="0 0 12 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M6 1L6.35355 0.646447C6.15829 0.451184 5.84171 0.451184 5.64645 0.646447L6 1ZM10.6464 6.35355C10.8417 6.54882 11.1583 6.54882 11.3536 6.35355C11.5488 6.15829 11.5488 5.84171 11.3536 5.64645L10.6464 6.35355ZM0.646447 5.64645C0.451184 5.84171 0.451184 6.15829 0.646447 6.35355C0.841709 6.54882 1.15829 6.54882 1.35355 6.35355L0.646447 5.64645ZM5.5 15C5.5 15.2761 5.72386 15.5 6 15.5C6.27614 15.5 6.5 15.2761 6.5 15H5.5ZM5.64645 1.35355L10.6464 6.35355L11.3536 5.64645L6.35355 0.646447L5.64645 1.35355ZM5.64645 0.646447L0.646447 5.64645L1.35355 6.35355L6.35355 1.35355L5.64645 0.646447ZM5.5 1V8H6.5V1H5.5ZM5.5 8V15H6.5V8H5.5Z"
          fill="white"
        />
      </Svg>
    </>
  );
};

export function Geolocation() {
  return (
    <>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
}

export const HeaderLogaut = () => {
  return (
    <>
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          d="M20 12H4"
          stroke="#212121"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 18L4 12L10 6"
          stroke="#212121"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
};

export const HeaderBack = () => {
  return (
    <>
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17 16L21 12L17 8"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21 12H9"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
};

export const User = ({ style }) => {
  return (
    <>
      <Svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          style={style}
          d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          style={style}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
};

export const Plus = ({ style }) => {
  return (
    <>
      <Svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z"
          style={style}
          fill-opacity="0.8"
        />
      </Svg>
    </>
  );
};

export const Basker = () => {
  return (
    <>
      <Svg width="24" height="24">
        <Path
          d="M3 6H5H21"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5C18.7239 5.5 18.5 5.72386 18.5 6H19.5ZM5.5 6C5.5 5.72386 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.72386 4.5 6H5.5ZM7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6H7.5ZM15.5 6C15.5 6.27614 15.7239 6.5 16 6.5C16.2761 6.5 16.5 6.27614 16.5 6H15.5ZM18.5 6V20H19.5V6H18.5ZM18.5 20C18.5 20.8284 17.8284 21.5 17 21.5V22.5C18.3807 22.5 19.5 21.3807 19.5 20H18.5ZM17 21.5H7V22.5H17V21.5ZM7 21.5C6.17157 21.5 5.5 20.8284 5.5 20H4.5C4.5 21.3807 5.61929 22.5 7 22.5V21.5ZM5.5 20V6H4.5V20H5.5ZM8.5 6V4H7.5V6H8.5ZM8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V1.5C8.61929 1.5 7.5 2.61929 7.5 4H8.5ZM10 2.5H14V1.5H10V2.5ZM14 2.5C14.8284 2.5 15.5 3.17157 15.5 4H16.5C16.5 2.61929 15.3807 1.5 14 1.5V2.5ZM15.5 4V6H16.5V4H15.5Z"
          fill="#BDBDBD"
        />
        <Path
          d="M10 11V17"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14 11V17"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
};

export const Window = ({style}) => {
  return (
    <>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Rect width="24" height="24" />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 3H10V10H3V3Z"
          style={style}
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 3H21V10H14V3Z"
          style={style}
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 14H21V21H14V14Z"
          style={style}
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 14H10V21H3V14Z"
          style={style}
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
};

export const Like = () => {
  return (
    <>
      <Svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M11.3646 6.59996H10.8646C10.8646 6.87611 11.0884 7.09996 11.3646 7.09996V6.59996ZM11.3646 3.39998H11.8646H11.3646ZM8.77345 1V0.5C8.58113 0.5 8.40586 0.610304 8.32266 0.783694L8.77345 1ZM5.31863 8.19995L4.86785 7.98365C4.83545 8.05115 4.81863 8.12508 4.81863 8.19995H5.31863ZM5.31863 16.9999H4.81863C4.81863 17.276 5.04249 17.4999 5.31863 17.4999V16.9999ZM15.0612 16.9999L15.0665 16.4999H15.0612V16.9999ZM16.7886 15.6399L16.2953 15.5582L16.2952 15.5591L16.7886 15.6399ZM17.9805 8.43995L18.4738 8.52161L18.474 8.52081L17.9805 8.43995ZM16.2531 6.59996V7.09999L16.2584 7.09994L16.2531 6.59996ZM5.31852 16.9999V17.4999C5.59466 17.4999 5.81852 17.276 5.81852 16.9999H5.31852ZM5.31852 8.19995H5.81852C5.81852 7.92381 5.59466 7.69995 5.31852 7.69995V8.19995ZM11.8646 6.59996V3.39998H10.8646V6.59996H11.8646ZM11.8646 3.39998C11.8646 1.76298 10.4439 0.5 8.77345 0.5V1.5C9.96511 1.5 10.8646 2.38604 10.8646 3.39998L11.8646 3.39998ZM8.32266 0.783694L4.86785 7.98365L5.76942 8.41626L9.22424 1.21631L8.32266 0.783694ZM4.81863 8.19995V16.9999H5.81863V8.19995H4.81863ZM5.31863 17.4999H15.0612V16.4999H5.31863V17.4999ZM15.056 17.4999C16.1356 17.5112 17.1085 16.7805 17.2821 15.7207L16.2952 15.5591C16.2104 16.077 15.7096 16.5067 15.0665 16.4999L15.056 17.4999ZM17.2819 15.7216L18.4738 8.52161L17.4873 8.35829L16.2953 15.5582L17.2819 15.7216ZM18.474 8.52081C18.5761 7.89746 18.3756 7.27092 17.9407 6.80775L17.2117 7.4922C17.442 7.73749 17.5371 8.05422 17.4871 8.3591L18.474 8.52081ZM17.9407 6.80775C17.5079 6.34665 16.8878 6.09328 16.2479 6.09999L16.2584 7.09994C16.6321 7.09602 16.9794 7.24483 17.2117 7.4922L17.9407 6.80775ZM16.2531 6.09996H11.3646V7.09996H16.2531V6.09996ZM5.31852 16.4999H2.72741V17.4999H5.31852V16.4999ZM2.72741 16.4999C2.01276 16.4999 1.5 15.972 1.5 15.3999H0.5C0.5 16.5951 1.53401 17.4999 2.72741 17.4999V16.4999ZM1.5 15.3999V9.79994H0.5V15.3999H1.5ZM1.5 9.79994C1.5 9.22782 2.01276 8.69995 2.72741 8.69995V7.69995C1.53401 7.69995 0.5 8.60476 0.5 9.79994H1.5ZM2.72741 8.69995H5.31852V7.69995H2.72741V8.69995ZM4.81852 8.19995V16.9999H5.81852V8.19995H4.81852Z"
          fill="#FF6C00"
        />
      </Svg>
    </>
  );
};

export const Shape = () => {
  return (
    <>
      <Svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 8.5C-0.00344086 9.81987 0.304932 11.1219 0.9 12.3C2.33904 15.1793 5.28109 16.9988 8.5 17C9.81987 17.0034 11.1219 16.6951 12.3 16.1L18 18L16.1 12.3C16.6951 11.1219 17.0034 9.81987 17 8.5C16.9988 5.28109 15.1793 2.33904 12.3 0.899998C11.1219 0.304929 9.81987 -0.00344328 8.5 -2.02948e-06H8C3.68419 0.238098 0.2381 3.68419 0 8V8.5Z"
          fill="#FF6C00"
        />
      </Svg>
    </>
  );
};

export const ShapeOn = () => {
  return (
    <>
      <Svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 9.5C0.996559 10.8199 1.30493 12.1219 1.9 13.3C3.33904 16.1793 6.28109 17.9988 9.5 18C10.8199 18.0034 12.1219 17.6951 13.3 17.1L19 19L17.1 13.3C17.6951 12.1219 18.0034 10.8199 18 9.5C17.9988 6.28109 16.1793 3.33904 13.3 1.9C12.1219 1.30493 10.8199 0.996557 9.5 0.999998H9C4.68419 1.2381 1.2381 4.68419 1 9V9.5V9.5Z"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
};
