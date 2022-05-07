export default {
    LoadCart(state) {
        const cart = localStorage.getItem('ecomCart')
        if (cart) {
            state.cart = JSON.parse(cart)
        }
    },
    AddToCart(state, product) {
        // verifica se o item está no carrinho
        const itemFound = state.cart.find((p) => p.product.id === product.id)
        if (!itemFound) {
            state.cart.push({
                product,
                quantity: 1
            })
        } else {
            itemFound.quantity += 1
        }
        // atualiza localStorage
        localStorage.setItem('ecomCart', JSON.stringify(state.cart))

        this.$swal({
            toast: true,
            text: "Item Adicionado ao carrinho",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            position: "top-end"
        })
    },
    RemoveCartItem(state, index) {
        state.cart.splice(index, 1)
            // atualiza localStorage
        localStorage.setItem('ecomCart', JSON.stringify(state.cart))

        this.$swal({
            toast: true,
            text: "Item Removido do carrinho",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            position: "top-end"
        })

    },
    DecreaseItemCount(state, index) {
        const item = state.cart[index];
        if (!item) return;
        if (item.quantity === 1) state.cart.splice(index, 1)
        else item.quantity -= 1;
        // atualiza localStorage
        localStorage.setItem('ecomCart', JSON.stringify(state.cart))

        this.$swal({
            toast: true,
            text: "Item Removido do carrinho",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            position: "top-end"
        })
    },

    IncreaseItemCount(state, index) {
        const item = state.cart[index]
        item.quantity += 1
            // atualiza localStorage
        localStorage.setItem('ecomCart', JSON.stringify(state.cart))

        this.$swal({
            toast: true,
            text: "Item Adicionado ao carrinho",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            position: "top-end"
        })
    },
    ClearCart(state) {
        state.cart = [];
        localStorage.removeItem('ecomCart');
    }
}