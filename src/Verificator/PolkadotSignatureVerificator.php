<?php

namespace Blomstra\Web3\Verificator;

use Blomstra\Web3\sr25519\sr25519;
use function Blomstra\Web3\ffiIsEnabled;

class PolkadotSignatureVerificator implements SignedMessageVerificator
{
    public function verifySignature(string $message, string $signature, string $publicKey): bool
    {
        if (! ffiIsEnabled()) {
            return false;
        }

        return (new sr25519())->VerifySign($publicKey, $message, $signature);
    }
}
