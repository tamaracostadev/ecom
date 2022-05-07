export default ({ store }, inject) => {
    store.commit('cart/LoadCart');

    inject('formatMoney', (money) => {
        return new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency'
        }).format(money)
    })
}