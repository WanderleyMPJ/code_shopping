@extends('layouts.app')

@section('content')
<p id="result">Atualizando telefone...</p>
<script type="text/javascript">
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 204){
            document.getElementById('result').innerText = 'Telefone Atualizado com Sucesso.'
        }else{
            document.getElementById('result').innerText = 'Não foi Possivel Atualizar o Telefone'
        }
    };
    xhttp.open('PATCH', '/api/customers/phone_numbers/{{$token}}', true);
    xhttp.send();
</script>
@endsection