<template>
<div class="card h-100">
  <div class="row g-0">
    <div class="col" style="max-width: 6rem;">
      <img :src="imageURL" :alt="title" class="img-fluid rounded-start">
    </div>
    <div class="col">
      <div class="card-body">
        <h6 class="card-title clamp">{{title}}</h6>
        <p class="card-text mb-0">
          <small class="clamp">Product: {{product}}</small>
          <small class="text-muted clamp">Attributes: {{details}}</small>
        </p>
        <p class="card-text d-flex justify-content-between">
          <small class="text-muted">Price: {{price? price.toLocaleString() : '-'}}</small>
          <small class="text-muted">
            <img v-if="isShopee" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAyVBMVEX////2QS7/ZTP+YzP/ZDP3RC79XjL3RS75TS/4Si/6UzD8WjH7VjH5uKj/XiT7OSL/6eP/7uf+ua37tK32AAD8NgD9TxX5Ow/9VSH6QhH6Rxr7PQD4Phn5GQD+VRf2MA37TyX/9/f2OiX7U0H/3dv9xsH8cWD9SAD+7+/9d1v+zcb+4tz/q5b/bDf6fXD9wLr/e1L/s5/6YFP/mn3/pIn/2tD7dGn8w7X/dUb9kIT9raf8pJr8fWf9mIb9i3f8nJH6k5D9bk3/i252H7X1AAAER0lEQVRoge2af3uaMBDHseq6AVNXGiuEH9GqoG6w2nWd0OrW9/+iFqC1SALxaLZnzzO/f2kCfAy5XO5yKspJJ530v+tTjQb1Og6w+vzFfdawLPNQV0V5uZAXRiLE4Kvb67RzvStIy6XnUnO9f9GHTOeput1J3zNqGTd+h6rNUgCQbqvlrcfVjFv37EwGpDWZBFWMb5QhB0IpFYy7lCEJ0pp850N6ZxIhLW/JY9wfAVEtjDBCJhFDWtc8yI8zIQQtjHS1BcsNtoQQb8Uyxq4IgsOCycSYCCD9mIUsewIIvju8YW3WQ3hTfy+AkJf1Fbx82OBaCG9SPtZD/PyqREVU22n2ZWvXQvpQCMqmI0IkM2GCHrJ7rqVC3MzlPeL9OiHZih4jmRAte1V+YTGS86zJlgfx09W7QgcrnmzTu67kQaz0Ar3kVpx0se2ILMhoR/vv/BKEpOsgQLIgfmqxT6TsIJ30NmkjwWk/YrywOaPNWyJrTmj3ADMQ8pO2x/Ye0gVCOj2q0bOGC9q9xEOrJDNdkTNkFzQBQDrti6IyAy42GLnS2CeIjVdF3yfHQ9x7tv84OQCIMD6TAOldNIVcnv95yBgCuWkICRwA5HNDyAACeWwImUIgt5U/NUqSm4gT7DxDEGAxPvGfYRBkEUIs5ITc+FCZeQDIA+8JY93UdQtjTANIggkPc2EDIAseg7pI/BCtPq2inY6IijbsNXEfAPnFgag09tpPxiBEDicFSSCQNtt/72tmMX+a8nK2HQTSY/sX2kjs0TYAL9z22X6kYSEDBkENISEEwnke1nBlsrnXHPS62BT5gRCxs1l3IRD2Ry/pUIQz/1aIsiAaFo2lC4lWfJ4LvB5pBCc1Zw2KYoNGcsdeQAM5pGuEJqfVEAcyEpfvZKe/aBakWmhb5esvQZCqKR480iSeZlpzrjmPYZCawGsWIkslTsLpCkCvq/exGkIV09GYc7Z9AIOIIoktVq2QaV3JhSgxVhFjglMEguxEkNTNMC9s5oEgYjcVIJXx1dEVKD+pCFeKwnk+V5TRlw0xWUgMg/DClZIc1S437WAQNlwhJVeSEMLY8E8Y5F25eztCBxa3pPM+LV+0geSMnEiCEG1kvZ7F7ZBK2DAzfCOE+nlNG6FFEk2XcUgDyPwE51BzGIQTSUw1THSdWDQUJqqKOK5LWb8ZQjGPJjJpWG9hZ8HdcNag7ZcXrmQKlkayu+BvaXSDBkLEMRZHV38Dcgk7wOGGK7Ih7qwBg+6+IMgxHpJRYosgpRNu/8g6W0FjR3jCXT6rd2tDRZ5a4rP6ctWh4xsQCwsMVDq541UdlC+HkHZ75GPEymF0mcqxmfoJ46SV/cwfX27SG1SC/kpNS3J1juelU9325EH6lcb5JK1i6tVY5jc5td/+da31r368VrEbQiZ9xEsrDqf/tjesqscPa+rxLxV5Z15fKN9L8O+BOjXah0466d/Wb+PLuQqaR2/wAAAAAElFTkSuQmCC" alt="shopee" width="24" height="24">
            <img v-if="isLazada" src="data:image/jpeg;base64,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" alt="lazada" width="24" height="24">
          </small>
        </p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    title: String,
    product: String,
    details: String,
    imageURL: String,
    price: Number,
    isShopee: Boolean,
    isLazada: Boolean
  }
}
</script>