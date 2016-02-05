export default Ember.Controller.extend({ 
  timer: Ember.Object.create({
    timeLeft: "25:00",
    totalTime: 25*60*1000,
    
    start: function(time) {
      var _this = this;
      this.reset(time);
      this._startedAt = new Date();
      this._intervalId = setInterval(function() { 
        _this.updateTimeLeft.apply(_this); 
      }, 100);
    },
    
    reset: function(time) {
      clearInterval(this._intervalId);
      if (time) {
        this.set('totalTime', time*60*1000);
      }
      this.set('timeLeft', this.msToString(this.get('totalTime')));
    },
    
    updateTimeLeft: function() {
      if(this.get('timeLeft') == '00:00') {
        alert("All Done!");
        this.reset(25);
        clearInterval(this._intervalId);
      }
      var now = new Date();
      var diff = now - this._startedAt;
      this.set('timeLeft', this.msToString(this.get('totalTime') - diff));
    },
      
    msToString: function(ms) {
      var seconds = parseInt(ms/1000, 10),
          minutes = parseInt(seconds/60, 10);
      
      function pad(num) {
          if (num < 10) return '0' + num;
          else return num.toString();
      }
      return pad(minutes) + ':' + pad(seconds - minutes * 60);    
    },
    pause: function() {
      clearInterval(this._intervalId);
    },
    unpause: function() {
      var _this = this;
      this._intervalId = setInterval(function() { 
        _this.updateTimeLeft.apply(_this); 
      }, 100);
    }
  }),

  actions: {
    pomodoro: function(){
      this.timer.start(25);
    },
    break: function() {
    this.timer.start(5);
    },
    stop: function() {
      this.timer.reset();
    },
    pause: function() {
      this.timer.pause();
    },
    unpause: function() {
      this.timer.unpause();
    }
  }
});