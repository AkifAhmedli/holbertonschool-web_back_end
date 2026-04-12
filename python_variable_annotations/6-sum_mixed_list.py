#!/usr/bin/env python3
"""
Bu modul qarışıq tipli (int və float) siyahını cəmləyən
funksiyanı ehtiva edir.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Tam və onluq ədədlər siyahısını cəmləyir və float qaytarır."""
    return float(sum(mxd_lst))
