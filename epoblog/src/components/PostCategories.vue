<template>
  <a>Categories</a>
  <div class="category_wrapper">
  <article class="category_card">
    <img src="../assets/logo.png" alt="" />
    <div class="card__content">
      <h2 class="card__title">Category 1</h2>
      <p class="category__link"><a href="#">Read more</a></p>
    </div>
  </article>
  <article class="category_card">
    <img src="../assets/logo.png" alt="" />
    <div class="card__content">
      <h2 class="card__title">Category 2</h2>
      <p class="category__link"><a href="#">Read more</a></p>
    </div>
  </article>
  <article class="category_card">
    <img src="../assets/logo.png" alt="" />
    <div class="card__content">
      <h2 class="card__title">Category 3</h2>
      <p class="category__link"><a href="#">Read more</a></p>
    </div>
  </article>
  <article class="category_card">
    <img src="../assets/logo.png" alt="" />
    <div class="card__content">
      <h2 class="card__title">Category 4</h2>
      <p class="category__link"><a href="#">Read more</a></p>
    </div>
  </article>
  <article class="category_card">
    <img src="../assets/logo.png" alt="" />
    <div class="card__content">
      <h2 class="card__title">Category 5</h2>
      <p class="category__link"><a href="#">Read more</a></p>
    </div>
  </article>
  <article class="category_card">
    <img src="../assets/logo.png" alt="" />
    <div class="card__content">
      <h2 class="card__title">Category 6</h2>
      <p class="category__link"><a href="#">Read more</a></p>
    </div>
  </article>
  <article class="category_card">
    <img src="../assets/logo.png" alt="" />
    <div class="card__content">
      <h2 class="card__title">Category 7</h2>
      <p class="category__link"><a href="#">Read more</a></p>
    </div>
  </article>
  </div>
</template>

<style>
@media (min-width: 500px) {
  .category_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
    align-items: center;
    justify-items: center
  }
}

.category_card {
  display: flex;
  position: relative;
  flex-direction: column;
  flex-basis: 25em;
  background-color:aliceblue;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 3px;
}

.card__content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card__title {
  /* absolute to sit over image, white with shadow to make it pop on all bkgrn images */
  position: absolute;
  color: #FFF;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  top: 20%;
  left: 10%;
}

.card__link {
  margin-top: auto; 
}

</style>