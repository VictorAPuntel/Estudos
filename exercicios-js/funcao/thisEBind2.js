function Pessoa() {
    this.idade = 0
    const self = this //outra maneira de usar o this nesse caso
    setInterval(function() {
        self.idade++
        console.log(self.idade);  
    }/*.bind(this) uma possibilidade de usar o this*/, 1000)
}

new Pessoa