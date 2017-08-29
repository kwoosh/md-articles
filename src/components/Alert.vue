<template>
<div>
    <b-card-group deck>
        <b-card header="featured"
                header-tag="header"
                footer="Card Footer"
                footer-tag="footer"
                title="Title">
            <p class="card-text">Header and footers using props.</p>
            <b-button href="#"
                      variant="primary">Go somewhere</b-button>
        </b-card>
        <b-card title="Title"
                header-tag="header"
                footer-tag="footer">
            <h6 slot="header"
                class="mb-0">Header Slot</h6>
            <em slot="footer">Footer Slot</em>
            <p class="card-text">Header and footers using slots.</p>
            <b-button href="#"
                      variant="primary">Go somewhere</b-button>
        </b-card>
    </b-card-group>
</div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})

class Alert extends Vue {
  dismissSecs = 10
  dismissCountDown = 0
  showDismissibleAlert = false

  countDownChanged(dismissCountDown) {
    this.dismissCountDown = dismissCountDown
  }

  showAlert() {
    this.dismissCountDown = this.dismissSecs
  }
}

export default Alert
</script>