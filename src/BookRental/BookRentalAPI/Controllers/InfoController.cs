using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookRentalAPI.Controllers
{
    public class CommitInfo
    {
        public string LatestCommit { get; set; }
        public DateTime DateCommit { get; set; }
    }
    [ApiController]
    [Route("[controller]/[Action]")]
    public class InfoController
    {
        public CommitInfo GetLatestCommit()
        {
            return
                new CommitInfo()
                {
                    LatestCommit = "{LatestCommit}",
                    DateCommit = DateTime.ParseExact("yyyyMMdd:HHmmss", "{DateCommit}",null)
                }
                ;
        }
    }
}
