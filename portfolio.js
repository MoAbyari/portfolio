.info h1 {
  font-size: 64px;
  margin-bottom: 10px;
  text-align: center;
  position: absolute;
  top: -56%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transform: translate(-50%,-50%);
  padding: 12px 48px;
  color: #ffffff;
  background: linear-gradient(to right, #f6eaea 0, #f0b136d1, #f6eaea 30%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: MoMo 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

@keyframes MoMo {

  0%
    {background-position: 0;}
  60%
    {background-position: 410px;}
  100%
    {background-position: 564px;}

}
