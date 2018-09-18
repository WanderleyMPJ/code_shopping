@component('mail::message')
# Mudança de Númer de telefone

Uma mudança de número de telefone foi solicitada, cliqui no link abaixo para valida-la.

@component('mail::button', ['url' => $url])
Validar Telefone
@endcomponent

Obrigado,<br>
{{ config('app.name') }}
@endcomponent
