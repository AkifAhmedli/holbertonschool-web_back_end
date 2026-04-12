#!/usr/bin/env python3
"""
Bu modul təsadüfi müddət gözləyən asinxron coroutine ehtiva edir.
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    0 ilə max_delay arasında təsadüfi bir saniyə gözləyir
     və həmin müddəti qaytarır.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
