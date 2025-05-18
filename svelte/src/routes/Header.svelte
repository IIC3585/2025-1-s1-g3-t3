<script>

</script>

<!-- From Uiverse.io by ElSombrero2 --> 
<div class="card" >
    <div class="content">
      <h1>MoneyExchange</h1>
    </div>
  </div>


<style>
/* From Uiverse.io by javierBarroso */ 
.card {
      width: 100%;
      height: 100px;
      background: #171717;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      cursor: pointer;
    }

    .card::before,
    .card::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100px;
      opacity: 0;
      transition: opacity 0.3s;
    }

    .card::before {
      background: linear-gradient(90deg, hsl(345deg 100% 47%), transparent);
      transform: rotate(0deg) translateY(50%);
      animation: rotation_9018 5s infinite linear;
      animation-play-state: paused;
    }

    .card::after {
      background: linear-gradient(90deg, transparent, #2268ff);
      transform: rotate(0deg) translateY(-50%);
      animation: rotation_9019 5s infinite linear;
      animation-play-state: paused;
    }

    .card:hover::before,
    .card:hover::after {
      opacity: 1; 
      animation-play-state: running;
    }

    .content {
      width: 97%;
      height: 87%;
      background: #171717;
      border-radius: 20px;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      position: relative;
    }

    @keyframes rotation_9018 {
  0% {
    transform: rotate(0deg) translateY(50%);
  }

  100% {
    transform: rotate(360deg) translateY(50%);
  }
}
@keyframes rotation_9019 {
  0% {
    transform: rotate(0deg) translateY(-50%);
  }

  100% {
    transform: rotate(360deg) translateY(-50%);
  }
}

</style>