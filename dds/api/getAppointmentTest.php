<?php
use GuzzleHttp\Client;
use PHPUnit\Framework\TestCase;

class GetAppointmentTest extends TestCase
{
    public function testGET()
    {
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', 'http://localhost:8888/ddsapi/getAppointment.php');

        echo $res->getStatusCode();

        $this->assertEquals(200, $res->getStatusCode());
    }

    public function testGETHeaders()
    {
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', 'http://localhost:8888/ddsapi/getAppointment.php');

        $this->assertTrue($res->hasHeader('Access-Control-Allow-Origin'));
        $this->assertTrue($res->hasHeader('Access-Control-Allow-Headers'));
        $this->assertTrue($res->hasHeader('Access-Control-Allow-Methods'));
    }
}
?>