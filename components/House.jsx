import React, { useEffect } from "react";

/*
  Designed by: Joanna Ngai
  Original image: https://dribbble.com/shots/14118297-Villa
*/
export const House = () => {
  useEffect(() => {
    const h = document.querySelector("#h");
    const b = document.body;

    let base = (e) => {
      let x = e.pageX / window.innerWidth - 0.5;
      let y = e.pageY / window.innerHeight - 0.5;
      h.style.transform = `
            perspective(10000px)
            rotateX(${y * 10 + 75}deg)
            rotateZ(${-x * 10 + 35}deg)
            translateZ(-9vw)
            scale3d(0.7, 0.7, 0.7)
        `;
    };

    b.addEventListener("pointermove", base);

    return () => {
      b.removeEventListener("pointermove", base);
    };
  }, []);

  return (
    <>
      <div className="house" id="h">
        <div className="shadows">
          <div className="shadow-a"></div>
          <div className="shadow-b"></div>
        </div>
        <div className="al">
          <div className="al__front face"> </div>
          <div className="al__back face"> </div>
          <div className="al__right face"> </div>
          <div className="al__left face"> </div>
          <div className="al__top face"> </div>
          <div className="al__bottom face"> </div>
        </div>
        <div className="ab">
          <div className="ab__front face"> </div>
          <div className="ab__back face"> </div>
          <div className="ab__right face"> </div>
          <div className="ab__left face"> </div>
          <div className="ab__top face"> </div>
          <div className="ab__bottom face"> </div>
        </div>
        <div className="at">
          <div className="at__front face"> </div>
          <div className="at__back face"> </div>
          <div className="at__right face"> </div>
          <div className="at__left face"> </div>
          <div className="at__top face"> </div>
          <div className="at__bottom face"> </div>
        </div>
        <div className="ac">
          <div className="ac__front face"> </div>
          <div className="ac__back face"> </div>
          <div className="ac__right face"> </div>
          <div className="ac__left face"> </div>
          <div className="ac__top face"> </div>
          <div className="ac__bottom face"> </div>
        </div>
        <div className="bce">
          <div className="bce__front face"> </div>
          <div className="bce__back face"> </div>
          <div className="bce__right face"> </div>
          <div className="bce__left face"> </div>
          <div className="bce__top face"> </div>
          <div className="bce__bottom face"> </div>
        </div>
        <div className="bci">
          <div className="bci__front face"> </div>
          <div className="bci__back face"> </div>
          <div className="bci__right face"> </div>
          <div className="bci__left face"> </div>
          <div className="bci__top face"> </div>
          <div className="bci__bottom face"> </div>
        </div>
        <div className="bl">
          <div className="bl__front face"> </div>
          <div className="bl__back face"> </div>
          <div className="bl__right face"> </div>
          <div className="bl__left face"> </div>
          <div className="bl__top face"> </div>
          <div className="bl__bottom face"> </div>
        </div>
        <div className="bt">
          <div className="bt__front face"> </div>
          <div className="bt__back face"> </div>
          <div className="bt__right face"> </div>
          <div className="bt__left face"> </div>
          <div className="bt__top face"> </div>
          <div className="bt__bottom face"> </div>
        </div>
        <div className="bbe">
          <div className="bbe__front face"> </div>
          <div className="bbe__back face"> </div>
          <div className="bbe__right face"> </div>
          <div className="bbe__left face"> </div>
          <div className="bbe__top face"> </div>
          <div className="bbe__bottom face"> </div>
        </div>
        <div className="bbi">
          <div className="bbi__front face"> </div>
          <div className="bbi__back face"> </div>
          <div className="bbi__right face"> </div>
          <div className="bbi__left face"> </div>
          <div className="bbi__top face"> </div>
          <div className="bbi__bottom face"> </div>
        </div>
        <div className="cl">
          <div className="cl__front face">
            <div className="lamp"></div>
          </div>
          <div className="cl__back face"> </div>
          <div className="cl__right face"> </div>
          <div className="cl__left face"> </div>
          <div className="cl__top face"> </div>
          <div className="cl__bottom face"> </div>
        </div>
        <div className="cc">
          <div className="cc__front face"> </div>
          <div className="cc__back face"> </div>
          <div className="cc__right face"> </div>
          <div className="cc__left face"> </div>
          <div className="cc__top face"> </div>
          <div className="cc__bottom face"> </div>
        </div>
        <div className="ccl">
          <div className="ccl__front face"> </div>
          <div className="ccl__back face"> </div>
          <div className="ccl__right face"> </div>
          <div className="ccl__left face"> </div>
          <div className="ccl__top face"> </div>
          <div className="ccl__bottom face"> </div>
        </div>
        <div className="cml">
          <div className="cml__front face"> </div>
          <div className="cml__back face"> </div>
          <div className="cml__right face"> </div>
          <div className="cml__left face"> </div>
          <div className="cml__top face"> </div>
          <div className="cml__bottom face"> </div>
        </div>
        <div className="cmr">
          <div className="cmr__front face"> </div>
          <div className="cmr__back face"> </div>
          <div className="cmr__right face"> </div>
          <div className="cmr__left face"> </div>
          <div className="cmr__top face"> </div>
          <div className="cmr__bottom face"> </div>
        </div>
        <div className="cmt">
          <div className="cmt__front face"> </div>
          <div className="cmt__back face"> </div>
          <div className="cmt__right face"> </div>
          <div className="cmt__left face"> </div>
          <div className="cmt__top face"> </div>
          <div className="cmt__bottom face"> </div>
        </div>
        <div className="dl">
          <div className="dl__front face"> </div>
          <div className="dl__back face"> </div>
          <div className="dl__right face"> </div>
          <div className="dl__left face"> </div>
          <div className="dl__top face"> </div>
          <div className="dl__bottom face"> </div>
        </div>
        <div className="dm">
          <div className="dm__front face"> </div>
          <div className="dm__back face"> </div>
          <div className="dm__right face"> </div>
          <div className="dm__left face"> </div>
          <div className="dm__top face"> </div>
          <div className="dm__bottom face"> </div>
        </div>
        <div className="dt">
          <div className="dt__front face"> </div>
          <div className="dt__back face"> </div>
          <div className="dt__right face"> </div>
          <div className="dt__left face"> </div>
          <div className="dt__top face"> </div>
          <div className="dt__bottom face"> </div>
        </div>
        <div className="el">
          <div className="el__front face"></div>
        </div>
        <div className="ec">
          <div className="ec__front face"></div>
        </div>
        <div className="er">
          <div className="er__right face"></div>
        </div>
        <div className="eb">
          <div className="eb__back face"></div>
        </div>
        <div className="fl">
          <div className="fl__front face"> </div>
          <div className="fl__back face"> </div>
          <div className="fl__right face"> </div>
          <div className="fl__left face"> </div>
          <div className="fl__top face"> </div>
          <div className="fl__bottom face"> </div>
        </div>
        <div className="ft">
          <div className="ft__front face"> </div>
          <div className="ft__back face"> </div>
          <div className="ft__right face"> </div>
          <div className="ft__left face"> </div>
          <div className="ft__top face"> </div>
          <div className="ft__bottom face"> </div>
        </div>
        <div className="fb">
          <div className="fb__front face"> </div>
          <div className="fb__back face"> </div>
          <div className="fb__right face"> </div>
          <div className="fb__left face"> </div>
          <div className="fb__top face"> </div>
          <div className="fb__bottom face"> </div>
        </div>
        <div className="table">
          <div className="table__front face"> </div>
          <div className="table__back face"> </div>
          <div className="table__right face"> </div>
          <div className="table__left face"> </div>
          <div className="table__top face"> </div>
          <div className="table__bottom face">
            <div className="foot">
              <div className="foot__front face"> </div>
              <div className="foot__back face"> </div>
              <div className="foot__right face"> </div>
              <div className="foot__left face"> </div>
              <div className="foot__top face"> </div>
              <div className="foot__bottom face"> </div>
            </div>
            <div className="foot">
              <div className="foot__front face"> </div>
              <div className="foot__back face"> </div>
              <div className="foot__right face"> </div>
              <div className="foot__left face"> </div>
              <div className="foot__top face"> </div>
              <div className="foot__bottom face"> </div>
            </div>
            <div className="foot">
              <div className="foot__front face"> </div>
              <div className="foot__back face"> </div>
              <div className="foot__right face"> </div>
              <div className="foot__left face"> </div>
              <div className="foot__top face"> </div>
              <div className="foot__bottom face"> </div>
            </div>
            <div className="foot">
              <div className="foot__front face"> </div>
              <div className="foot__back face"> </div>
              <div className="foot__right face"> </div>
              <div className="foot__left face"> </div>
              <div className="foot__top face"> </div>
              <div className="foot__bottom face"> </div>
            </div>
          </div>
        </div>
        <div className="kitchen">
          <div className="kitchen__front face"> </div>
          <div className="kitchen__back face"> </div>
          <div className="kitchen__right face"> </div>
          <div className="kitchen__left face"> </div>
          <div className="kitchen__top face"> </div>
          <div className="kitchen__bottom face"> </div>
        </div>
        <div className="couch">
          <div className="couch__front face"> </div>
          <div className="couch__back face"> </div>
          <div className="couch__right face"> </div>
          <div className="couch__left face"> </div>
          <div className="couch__top face"> </div>
          <div className="couch__bottom face"> </div>
        </div>
        <div className="couchb">
          <div className="couchb__front face"> </div>
          <div className="couchb__back face"> </div>
          <div className="couchb__right face"> </div>
          <div className="couchb__left face"> </div>
          <div className="couchb__top face"> </div>
          <div className="couchb__bottom face"> </div>
        </div>
        <div className="couchc">
          <div className="couchc__front face"> </div>
          <div className="couchc__back face"> </div>
          <div className="couchc__right face"> </div>
          <div className="couchc__left face"> </div>
          <div className="couchc__top face"> </div>
          <div className="couchc__bottom face"> </div>
        </div>
        <div className="couchd">
          <div className="couchd__front face"> </div>
          <div className="couchd__back face"> </div>
          <div className="couchd__right face"> </div>
          <div className="couchd__left face"> </div>
          <div className="couchd__top face"> </div>
          <div className="couchd__bottom face"> </div>
        </div>
        <div className="picture">
          <div className="picture__front face"> </div>
          <div className="picture__back face"> </div>
          <div className="picture__right face"> </div>
          <div className="picture__left face"> </div>
          <div className="picture__top face"> </div>
          <div className="picture__bottom face"> </div>
        </div>
        <div className="door-r">
          <div className="door-r__front face"> </div>
          <div className="door-r__back face"> </div>
          <div className="door-r__right face"> </div>
          <div className="door-r__left face"> </div>
          <div className="door-r__top face"> </div>
          <div className="door-r__bottom face"> </div>
        </div>
        <div className="door-l">
          <div className="door-l__front face"> </div>
          <div className="door-l__back face"> </div>
          <div className="door-l__right face"> </div>
          <div className="door-l__left face"> </div>
          <div className="door-l__top face"> </div>
          <div className="door-l__bottom face"> </div>
        </div>
        <div className="door-b">
          <div className="door-b__front face"> </div>
          <div className="door-b__back face"> </div>
          <div className="door-b__right face"> </div>
          <div className="door-b__left face"> </div>
          <div className="door-b__top face"> </div>
          <div className="door-b__bottom face"> </div>
        </div>
        <div className="door-t">
          <div className="door-t__front face"> </div>
          <div className="door-t__back face"> </div>
          <div className="door-t__right face"> </div>
          <div className="door-t__left face"> </div>
          <div className="door-t__top face"> </div>
          <div className="door-t__bottom face"> </div>
        </div>
      </div>
    </>
  );
};
