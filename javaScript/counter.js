$(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-num");
    delayTo = $this.attr("delay");
    if (!delayTo) {
      delayTo = 2000;
    }
    $({ countNum: $this.text() }).animate(
      { countNum: countTo },
      {
        duration: delayTo,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
  