<?php
use GuzzleHttp\Client;
use PHPUnit\Framework\TestCase;

class GetDoctorTest extends TestCase
{
    public function testGET()
    {
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', 'http://localhost:8888/ddsapi/getDoctor.php');

        echo $res->getStatusCode();

        $this->assertEquals(200, $res->getStatusCode());
    }

    public function testGETHeaders()
    {
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', 'http://localhost:8888/ddsapi/getDoctor.php');

        $this->assertTrue($res->hasHeader('Access-Control-Allow-Origin'));
        $this->assertTrue($res->hasHeader('Access-Control-Allow-Headers'));
        $this->assertTrue($res->hasHeader('Access-Control-Allow-Methods'));
    }
}
?>